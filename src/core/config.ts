class config {
    port!: number;
    host!: string;
    sessionSecret!: string;
  
    constructor() {
      this.port = Number(process.env.PORT) || 4000;
      this.host = process.env.HOST || 'localhost';
      this.sessionSecret = process.env.SESSION_SECRET || 'sessionsecretcarboncredit';
    }
  
  }
  
  export default new config();
  