import { Component, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PortfolioChatService } from '../../services/portfolio-chat.service';

export interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-about-me',
  imports: [FormsModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AboutMeComponent {
  @ViewChild('chatBody') chatBody!: ElementRef;

  messages: ChatMessage[] = [
    { role: 'bot', text: 'Hi! What would you like to know about Segun? You can ask about his work experience, certifications, education, projects, email, location, or LinkedIn.' }
  ];
  userInput: string = '';
  isLoading: boolean = false;
  chatOpen: boolean = false;

  constructor(private chatService: PortfolioChatService) {}

  send() {
    const question = this.userInput.trim();
    if (!question || this.isLoading) return;

    this.messages.push({ role: 'user', text: question });
    this.userInput = '';
    this.isLoading = true;
    this.scrollToBottom();

    this.chatService.ask(question).subscribe({
      next: (answer) => {
        this.messages.push({ role: 'bot', text: this.formatMarkdown(answer) });
        this.isLoading = false;
        this.scrollToBottom();
      },
      error: () => {
        this.messages.push({ role: 'bot', text: 'Something went wrong. Please try again.' });
        this.isLoading = false;
        this.scrollToBottom();
      }
    });
  }

  private formatMarkdown(text: string): string {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  }

  private scrollToBottom() {
    setTimeout(() => {
      if (this.chatBody) this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
    }, 50);
  }
}
