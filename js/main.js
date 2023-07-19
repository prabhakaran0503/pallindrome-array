var a=prompt("Enter The Valu");
var b=0;
var c;
var k=a;
while(a>0)
	{
		c=a%10;
		b=b*10+c;
		a=parseInt(a/10);
	}
	if(b==k)
	{
		document.write("palindrome");
	}
	else
	{
		document.write("Not palindrome");
	}
		
	