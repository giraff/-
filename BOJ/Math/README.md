## 수학 문제 (18문제)

최대 공약수 구하는 법 :: **유클리드 호제법**

```jsx
자연수 A와 B의 최대 공약수

1) A를 B로 모듈러 연산
A % B
2) 만약 1)의 결과가 0이라면, 'B'가 최대 공약수
if(A % B === 0) GCD = B
3) 만약 1)의 결과가 0이 아니라면 A 를 B로, B를 A % B의 결과값으로 치환한 뒤 다시 1)을 한다
if(A % B !== 0)
	A = B
	B = A % B
	...다시 1)
```

pseudo code :: recursive

```jsx
function gcd(a, b) {
	if(b === 0) return a;
	else return gcd(b, a % b);
}
```

pseudo code :: iterative

```jsx
function gcd(a, b) {
	while(true) {
		if(a & b === 0) return b;
		a = b;
		b = a % b;
	}
}

```

**최소 공배수 구하는 법 1. 최대 공약수 이용**

```jsx
두 자연수의 공통된 배수 중 가장 작은 자연수 
==> 두 자연수의 곱 / 최대 공약수
```

---
10430 나머지 : 수학 구현 사칙연산 

- 풀이
    
    ```jsx
    (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
    
    (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
    
    세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.
    
    /*첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)*/
    5 8 4
    /*첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.*/
    1
    1
    0
    0
    ```
    
    ```jsx
    const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
    
    console.log((A + B) % C);
    console.log(((A%C) + (B%C)) % C);
    console.log((A * B) % C);
    console.log(((A % C) * (B%C)) % C);
    ```
    

2609 **최대 공약수와 최소 공배수** :: 유클리드 호제법 (재귀)

- 풀이
    
    ```jsx
    두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.
    
    24 18
    
    6
    72
    ```
    
    ```jsx
    const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);
    
    // 최대공약수
    function gcd(a, b) {
    	if(b === 0) return a;
    	else return gcd(b, a % b);
    }
    
    // 최소공배수
    
    let gcdValue = gcd(A, B);
    console.log(gcdValue);
    console.log(A*B / gcdValue);
    ```
    

1934 **최소 공배수 (LCM) :: 최대 공약수 이용**

- 풀이
    
    ```jsx
    두 자연수 A와 B에 대해서, A의 배수이면서 B의 배수인 자연수를 A와 B의 공배수라고 한다. 
    이런 공배수 중에서 가장 작은 수를 최소공배수라고 한다. 
    예를 들어, 6과 15의 공배수는 30, 60, 90등이 있으며, 최소 공배수는 30이다.
    
    두 자연수 A와 B가 주어졌을 때, A와 B의 최소공배수를 구하는 프로그램을 작성하시오.
    
    /* 첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 둘째 줄부터 T개의 줄에 걸쳐서 A와 B가 주어진다. (1 ≤ A, B ≤ 45,000) */
    3
    1 45000
    6 10
    13 17
    /* 첫째 줄부터 T개의 줄에 A와 B의 최소공배수를 입력받은 순서대로 한 줄에 하나씩 출력한다. */
    45000
    30
    221
    ```
    
    ```jsx
    const [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let result = [];
    function gcd(a,b) {
    	if(b === 0) return a;
    	else return gcd(b, a%b);
    }
    input.forEach((item) => {
    	let [a, b] = item.split(' ').map(v => +v);
    	result.push(a * b / gcd(a, b));	
    })
    
    console.log(result.join('\n'));
    ```
    

**1850** **최대 공약수** :: 최대 공약수 변형한 문제 ← **규칙 찾기**!!

- 풀이 (답 보고 품)
    
    ```jsx
    모든 자리가 1로만 이루어져있는 두 자연수 A와 B가 주어진다. 이때, A와 B의 최대 공약수를 구하는 프로그램을 작성하시오.
    
    예를 들어, A가 111(3)이고, B가 1111(4)인 경우에 A와 B의 최대공약수는 1이고, A가 111(3)이고, B가 111111(6)인 경우에는 최대공약수가 111이다.
    
    /* 첫째 줄에 두 자연수 A와 B를 이루는 1의 개수가 주어진다. 입력되는 수는 2^63보다 작은 자연수이다.*/
    3 4
    /* 첫째 줄에 A와 B의 최대공약수를 출력한다. 정답은 천만 자리를 넘지 않는다. */
    1
    ```
    
    풀이1)
    
    111 (3) / 1111 (4) ⇒ 1
    
    111(3) / 111111(6) ⇒ 111(3) :: 3과 6의 최대 공약수 3
    
    11111(5) / 1111111111(10) ⇒ 11111(5) :: 5와 10의 최대 공약수 5
    
    11111(5) / 111111111111111(15) ⇒ 11111(5) :: 5와 15의 최대 공약수 5
    
    이렇게 된다면 사실상 A와 B에 최대공약수를 구하고 결과 수만큼 1을 자릿수에 채워 출력해주면 된다.
    
    ```jsx
    let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => BigInt(v));
    function gcd(a, b) {
    	if(b == 0) return a;
    	else return gcd(b, a%b);
    }
    
    let gcdValue = gcd(A, B);
    let result = [];
    for(let i = 0; i < gcdValue; i++) {
        result.push(1);
    }
    console.log(result.join(''))
    ```
    
    ```jsx
    for(let i = 0; i < gcdValue; i++) {
        result += 1 * (10**i)
    }
    ```
    
    이렇게 수식으로 1의 자릿수를 채우는 것 보다
    
    빈 배열에 ‘1’을 추가함으로써 시간 단축을 할 수 있었다.
    

**9613 GCD 합 :: 문제 독해 잘하자.** 

```jsx
문제
양의 정수 n개가 주어졌을 때, 가능한 모든 쌍의 GCD의 합을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 t (1 ≤ t ≤ 100)이 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있다. 
각 테스트 케이스는 수의 개수 n (1 < n ≤ 100)가 주어지고, 다음에는 n개의 수가 주어진다. 
입력으로 주어지는 수는 1,000,000을 넘지 않는다.

출력
각 테스트 케이스마다 가능한 모든 쌍의 GCD의 합을 출력한다.

input;
3
**4** 10 20 30 40
**3** 7 5 12
**3** 125 15 25

output: 
70
3
35
```

주어진 수들을 두 개씩 짝지어서 그 두 수의 GCD의 합을 구하여 출력하여야 한다.

```jsx
let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];
function gcd(a, b) {
	if(b == 0) return a;
	else return gcd(b, a%b);
}

input.forEach((str) => {
	let sum = 0;
	let [tc, ...tmp] = str.split(' ');

	for(let i = 0; i < tmp.length - 1; i++) {
		for(let j = i + 1; j < tmp.length; j++) {
			sum += gcd(+tmp[i], +tmp[j])
		}
	}
	result.push(sum);
});

console.log(result.join('\n'));
```

독해가 중요한 문제.

1) 각 줄에 들어오는 값들은 [n의 개수_n1_n2_n3_…nn]이다.

착각하지 말자!

2) input 갯수가 100개 뿐이라서 3중 for문도 가능했다.