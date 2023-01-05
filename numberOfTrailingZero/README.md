# Trailing Zeroes  

The goal for this code challenge was to create a function that could take in a factorial, and return the number of trailing zeroes from that fatorial number.  
Example Input: 6
Example Output: 1
The 6! is 720 which has 1 trailing zero.  

# Approach  

This function can be written rather simply using a formula for determing trailing zeroes. Dividing the factorial first by 5 determines how many trailing zeroes there will be. Six divided by 5 and rounded down equals one which is the total number of trailing zeroes. If the quotient is larger than 5, divided that quotient by 5 again and add the two quotients together. This can be continued down the line to give you the total number of trailing zeroes without having to actually find the product of the factorial.