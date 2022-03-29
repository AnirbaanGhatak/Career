function verifyForm()
{
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var mobno = document.getElementById('mobno');
	var message = document.getElementById('message');

	if(verifyName(name)){
		if(verifyEmail(email)){
			if(verifyMobno(mobno)){
				if(verifyMessage(message)){
					return true;
				}
			}
		}
	}

	return false;
}

function verifyName(name)
{
	var exp = /^[a-zA-Z\s]+$/;
	if(name.value == "")
	{
		alert("Kindly enter your name.");
		name.focus();
		return false;
	}
	else if(exp.test(name.value))
	{
		return true;
	}
	else
	{
		alert("Please make sure you only enter alphabets in the name section.");
		name.focus();
		return false;
	}
}

function verifyEmail(email)
{
	var exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value == "")
	{
		alert("Kindly enter your email.");
		email.focus();
		return false;
	}
	else if(exp.test(email.value))
	{
		return true;
	}
	else
	{
		alert("Please enter a valid email ID.");
		email.focus();
		return false;
	}
}

function verifyMobno(mobno)
{
	var exp = /^[987][0-9]{2}(-?)[0-9]{3}(-?)[0-9]{4}$/;
	if(mobno.value == "")
	{
		alert("Kindly enter your mobile number.");
		mobno.focus();
		return false;
	}
	else if(exp.test(mobno.value))
	{
		return true;
	}
	else
	{
		alert("Please make sure that the number starts with 9, 8 or 7 only and it is 10-digits long.");
		mobno.focus();
		return false;
	}
}

function verifyMessage(message)
{
	if(message.value == "")
	{
		alert("Kindly enter your message.");
		message.focus();
		return false;
	}
	else
	{
		return true;
	}
}