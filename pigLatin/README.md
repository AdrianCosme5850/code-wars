# Pig Latin  

The challenge here was to translate a string into pig latin. You must ignore punctuation.

## Approach  

I split the string into individual words, then tested if the characters in the string were punctuation using a regex. As long as it wasn't I replaced the last character with the first and added ay and a space. I used string.trim to remove the whitespaces at the end.