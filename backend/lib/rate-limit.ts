type LimitConfig = {
  windowMs: number;
  max: number;
};

type Bucket = {
  count: number;
  expiresAt: number;
};

type RateLimitResult = {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
};

const store = new Map<string, Bucket>();

function nowMs(): number {
  return Date.now();
}

export function applyRateLimit(key: string, config: LimitConfig): RateLimitResult {
  const now = nowMs();
  const bucket = store.get(key);

  if (!bucket || now >= bucket.expiresAt) {
    const resetAt = now + config.windowMs;
    store.set(key, { count: 1, expiresAt: resetAt });
    return {
      allowed: true,
      limit: config.max,
      remaining: Math.max(config.max - 1, 0),
      resetAt,
    };
  }

  if (bucket.count >= config.max) {
    return {
      allowed: false,
      limit: config.max,
      remaining: 0,
      resetAt: bucket.expiresAt,
    };
  }

  bucket.count += 1;
  store.set(key, bucket);

  return {
    allowed: true,
    limit: config.max,
    remaining: Math.max(config.max - bucket.count, 0),
    resetAt: bucket.expiresAt,
  };
}

export function getRetryAfterSeconds(resetAt: number): number {
  const retryMs = Math.max(resetAt - nowMs(), 0);
  return Math.ceil(retryMs / 1000);
}

setInterval(() => {
  const now = nowMs();
  for (const [key, bucket] of store.entries()) {
    if (now >= bucket.expiresAt) {
      store.delete(key);
    }
  }
}, 60_000).unref();
