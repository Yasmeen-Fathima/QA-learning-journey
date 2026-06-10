import anthropic

client = anthropic.Anthropic()

note = input("Enter inspection note: ")

message = client.messages.create(
    model = "claude-opus-4-6",
    max_tokens = 1024,
    temperature = 0,
    system="return only specific fields asset id, asset type, Severity: [Low/Medium/High/Critical] (score X/10), Risk: [Low/Medium/High] (score X/10), location, Vague Input Flag: [Yes/No] and nothing else, Review flag: [Yes/No] and nothing else, Deviation: [Normal/not Normal] nothing else  and description , never invent information not in the input, no back and forth questions, return a structured text",
    messages= [{
        "role": "user", "content":note
    }]
)



print("Call: ",message.content[0].text)