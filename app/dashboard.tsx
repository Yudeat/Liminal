export default function Dashboard() {
  return (
    <>
   
      <p className="text-6xl font-bold">Dashboard</p>
      <p className="text-2xl font-bold">
      A Place Between decision and departure
        </p>
      <p className="text-xl">
        Liminal is a place where you can make decisions and leave without
        regrets.  
        
      </p>  
       <table> 
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Location</td>
        </tr>
        <tr>
          <td>John</td>
          <td>30</td>
          <td>USA</td>  
          </tr>
        <tr>
          <td>Jane</td>
          <td>25</td>
          <td>Canada</td>  
          </tr>
        <tr>
          <td>Tom</td>
          <td>35</td>
          <td>UK</td>  
          </tr>  
          </table>
    </>
  );
}