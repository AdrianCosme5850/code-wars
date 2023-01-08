# Rot 13  

The Challenge here was to use the Rot13 cipher to change a string to a cipher. This involves replacing the letters in the string with a letter 13 characters down from the letter. If it goes past z it will loop back to the beginning of the alphabet. Special characters and numbers should be the same. Capital letters should be retained.  

## Approach  

I used ASCII decimals and added 13 to it. If the number went past its relative range, I subtracted 13. Capital and lowercase letters have different ASCII ranges, so that wasn't an issue. If it didn't fall in those ranges, I did nothing with the characters.