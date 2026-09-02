## Test ideas to test the Field Inspection Summariser

1. **Detailed input with clear damage** - should return Vague Input Flag as No
2. **Asset ID when provided should match the input** 
3. **Asset ID when not provided should display as N/A**
4. **Asset type when provided should match the input**
5. **Asset type when not provided should display as N/A**
6. **When severity is mentioned in the input** - Severity should be calculated and displayed both in words and score
7. **Risk should be calculated correctly** - Risk should be displayed in both words and scale
8. **High voltage line with structural damage should return Severity 7-10, not Low or Medium**
9. **Review Flag should be set if severity and/or risk are high**
10. **If Vague Input Flag is set** - Set review flag to yes
11. **Deviation is set to Not Normal** - Either severity or risk is high
12. **Location should match the description provide**
13. **If location is not provided**- set Location to NA