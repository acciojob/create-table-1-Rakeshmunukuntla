
let cell=1;

function insert_Row() 
{
	const table = document.getElementById("sampleTable");
	
    //Write your code here

  const newRow=table.insertRow(0);
		
	const col1=newRow.insertCell(0);
	const col2=newRow.insertCell(1);

	col1.textContent="New Cell"+cell;
	cell++;
	col2.textContent="New Cell"+cell;
	cell++;
 
}
