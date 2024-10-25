const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceList = document.querySelectorAll('.price');
	
	let totalPrice = 0;
	for(let i=0; i<priceList.length; i++) {
		totalPrice += +priceList[i].innerText;
	}
	
	const tr = document.createElement('tr');
	const td = document.createElement('td');
	td.innerText = totalPrice;
	td.setAttribute('colspan',2);
	td.id = 'ans';
	td.style.textAlign='center';
	tr.append(td);

	const table = document.querySelector('table');
	table.append(tr);
};

getSumBtn.addEventListener("click", getSum);

