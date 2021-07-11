function check (form)
{

if (form.UserName.value == "ukeshmainali029@gmail.com" && form.Password.value == "THACHAINAyaar123")
 {
	window.open('Frameset.html')
 }

else if (form.UserName.value == "" && form.Password.value == "")

{
	alert("Please enter the UserName and Password")
}

else if(form.UserName.value == "")
	
{
	alert("Please enter the UserName")
}

else if(form.Password.value == "")
	
{
	alert("Please enter the Password")
}


else

{
	alert("Wrong UserName or Password")
}


}
