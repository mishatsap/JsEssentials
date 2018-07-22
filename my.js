//1.1 Converter for usd,uah and reverse;

function Currency(inputUsd, inputUan){
var Uan;
var Usd;
Uan = inputUsd*26
Usd = (inputUan/26).toFixed(2);
console.log(Uan, Usd)
}

Currency(1, 0);



// 1.3. Function that returns average number of values.

function  check(arr){
var sum = 0;

for (var i = 0; i < arr.length; i++ ) {

sum += arr[i];
}
console.log(sum/arr.length)
}
check([1,4,2]);


// 2.1. Recursion function that print numbers from 10 to 1.


let arr=[];
let recurs=(n)=>{
    if(n!=0){
        arr.push(n);
        recurs(n-1);
    }
    else{
    console.log(arr.join(':'));
}
}
recurs(10);


// 3. Resolve all issues in the code. 

const users = {
  1: {
    name: 'Roman',
    lastName: 'Lurov',
    otherData: {
      role: 'student'
    }
  },
  2: {
    name: 'Ivan',
    lastName: 'Bondarenko',
    otherData: {
      role: 'student'
    }
  },
  3: {
    name: 'Roman',
    lastName: 'Lurov',
    otherData: {
      role: 'student'
    }
  },
  
  4: {
    name: 'Oleg',
    lastName: 'Murko',
    otherData: {
      role: 'student'
    }
  },
  5: {
    name: 'Kurz',
    lastName: 'Smith',
    otherData: {
      role: 'student'
    }
  }
};

Object.keys(users).forEach(function(key) {
  const user = users[key];
  
  if(user) {
     console.log('name: ', user.name);
     console.log('last name: ', user.lastName);
	  if(user.otherData){   
      console.log('role: ', user.otherData.role)
    }
  }
})


// 4. Print in console using for.




function moreHash (hash, repeat) {
	for (var i = 1; i < repeat; i++) {
		console.log(hash.repeat(i));
	}
}

moreHash('7', 4);



// 5. Function to generating fibonacci sequence.

function fib(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(4));
