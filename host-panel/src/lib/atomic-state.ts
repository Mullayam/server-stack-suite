export class AtomicState {
    constructor(public message: string | undefined = undefined) {}
  
    setMessage(message: string) {
      this.message = message;
    }
  
    getMessage() {
      const message = this.message;
      this.message = undefined;
      return message;
    }
  }