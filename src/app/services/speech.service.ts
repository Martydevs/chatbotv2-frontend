import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpeechService {
  private synth: any;

  constructor() {
    this.synth = window.speechSynthesis;
  }

  speakFromUtterance(utterance: string): void {
    const ss = new SpeechSynthesisUtterance(utterance);
    ss.volume = 1;
    ss.rate = 1.0;
    ss.pitch = 0.4;
    ss.lang = 'es-MX';
    ss.voice = this.synth.getVoices()[248];
    this.synth.speak(ss);
  }
}