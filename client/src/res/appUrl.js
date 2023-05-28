export class AppUrl {
  constructor() {
    this.baseUrl = !true
      ? "https://job-check-list-backedn.vercel.app/api/v1"
      : "http://localhost:1010/api/v1";
    this.authEndPoint = `${this.baseUrl}/auth`;
    this.fileUploadEndPoint = `${this.baseUrl}/upload`;
    this.feedEndPoint = `${this.baseUrl}/feed`;
    this.adminFeedEndPoint = `${this.baseUrl}/admin/feed`;
  }
}
