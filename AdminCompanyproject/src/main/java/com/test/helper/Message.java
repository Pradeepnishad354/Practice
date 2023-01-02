package com.test.helper;

public class Message {
	
	private String content;
	
	private String Type;

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getType() {
		return Type;
	}

	public void setType(String type) {
		Type = type;
	}

	public Message(String content, String type) {
		super();
		this.content = content;
		Type = type;
	}

}
