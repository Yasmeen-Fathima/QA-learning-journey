import anthropic

client = anthropic.Anthropic()

note = input("Enter inspection note: ")

message = client.messages.create(
    model = "claude-opus-4-6",
    max_tokens = 1024,
    temperature = 0,
    system="return only JSON format with no markdown, no backticks no code fences with specific fields asset id, asset type, Severity: [Low/Medium/High/Critical] (score X/10), Risk: [Low/Medium/High] (score X/10), location, Vague Input Flag: [Yes/No] and nothing else, Review flag: [Yes/No] and nothing else, Deviation: [Normal/not Normal] nothing else  and description , never invent information not in the input, no back and forth questions.",
    messages= [{
        "role": "user", "content":note
    }]
)

response_text = message.content[0].text
response_text = response_text.strip()
response_text = response_text.replace("```json","").replace("```","").strip()
print(response_text)