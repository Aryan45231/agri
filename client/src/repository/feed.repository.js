import { AppUrl } from "../res/appUrl";
import { ApiService } from "../data/network/apiService";
export class FeedRepository {
    constructor() {
        this.appUrl = new AppUrl();
    this.apiService = new ApiService();
    }
    async uploadFeedImage(payload) {
        const url = `${this.appUrl.fileUploadEndPoint}/`
        try {
        
            return await this.apiService.getPostApiResponse(url, payload, "formdata");
        } catch (error) {
            throw error
        }
    }
    async getFeeds(pageNo) {
   
        const url = `${this.appUrl.feedEndPoint}//*/${pageNo}`
        try {
            return await this.apiService.getGetApiResponse(url);
        } catch (error) {
            throw error
        }
    }
    async upload(payload) {
        const url = `${this.appUrl.feedEndPoint}/`
        try {
            return await this.apiService.getPostApiResponse(url, payload);
        } catch (error) {
            throw error
        }
    }
    async editFeed(payload){
        const url = `${this.appUrl.adminFeedEndPoint}/`
        try {
            return await this.apiService.getPatchApiResponse(url, payload);
        } catch (error) {
            throw error
        }
    }
    async deleteFeed(payload){
        const url = `${this.appUrl.adminFeedEndPoint}/`
        try {
            return await this.apiService.getDeleteApiResponse(url, payload);
        } catch (error) {
            throw error
        }
    }
}