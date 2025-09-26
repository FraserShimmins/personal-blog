import * as React from "react";

type EmailTemplateProps = {
  heading?: string;       // optional title
  fromEmail: string;      // visitor's email
  subject?: string;       // visitor's subject (optional)
  message: string;        // visitor's message
};

export default function EmailTemplate({
  heading = "New contact message",
  fromEmail,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h2>{heading}</h2>
      <p><strong>From:</strong> {fromEmail}</p>
      {subject ? <p><strong>Subject:</strong> {subject}</p> : null}
      <p><strong>Message:</strong></p>
      <pre style={{ whiteSpace: "pre-wrap" }}>{message}</pre>
    </div>
  );
}
