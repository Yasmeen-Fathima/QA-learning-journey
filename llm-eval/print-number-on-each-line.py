
with open('test-ideas.md','r') as f:
    filecontent = f.readlines()
for i,lines in enumerate(filecontent):
    print(f"{i+1}. {lines}")
    