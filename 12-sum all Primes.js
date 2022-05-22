/*A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it
 is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
 sumPrimes(10) should return 17.*/

function sumPrime(num) {
// Helper function to check primality
    function isPrime(num) {
    for (let i=2; i<=Math.sqrt(num); i++) {
        if (num%i ==0) 
            return false;
    }
    return true;  
    }
// Check all numbers for primality
    let calculator = 0
    for (i=2; i<=num; i++) {
        if (isPrime(i)) 
            calculator += i; 
}
return calculator;
}
sumPrime(10);