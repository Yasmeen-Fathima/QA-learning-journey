# Field inspection summariser - eval spec

## Input
input is the user prompt. It could be anything from detailed description to just one sentence

## Output Fields
Output should contain fields 
- Asset ID 
- Asset Type 
- Location 
- Deviation
- Severity
- Risk
- Review flag 
- Vague input
- Description

## Rules
- If Deviation is "Not normal" check for Severity and Risk
- Severity is defined as 1-3 as Low, 4-6 as Medium, 7-8 as High, 9-10 as Critical
- Risk is defined as 1-4 as Low, 5-7 as Medium and 8-10 as High
- Never hallucinate
- No back and forth questioning
- Vague input - set vague input flag for human review
- Review Flag — Yes/No, triggered when severity is High/Critical or risk is High
- Vague Input Flag — Yes/No, triggered when input lacks sufficient detail to assess

## Good output: 
accurate, structured, grounded in input and severity justified by facts. output is in json format without the markdown.

## Good Output Example
Input: "Pole 4872 leaning 15 degrees, rust at base, near substation 3"
Output: Asset ID: 4872, Deviation: Not Normal, Severity: High (7), Risk: High (8), Review Flag: Yes

## Bad output: 
inaccurate, invented asset ids, misleading

## Bad Output Example  
Input: "Pole 4872 leaning 15 degrees"
Output: Asset ID: 4872, Location: Substation 3 ← hallucinated, not in input