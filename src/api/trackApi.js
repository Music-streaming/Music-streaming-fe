import { api } from"./axiosInstance";



//1. 트랙 기본 정보
export const getTrackDetail = async(trackId) =>{
    const res = await api.get(`/api/tracks/${trackId}`);
    return res.data;
}
//2.스트리밍 URL 또는 플레이백 정보
export const getTrackPlayback = async(trackId) => {
    const res = await api.get(`/api/tracks/${trackId}/playbacks`);
    return res.data;
}

//3. 재생 카운트 기록 POST(옵션)
export const postTrackPlayback = async (trackId) => {
    const res = await api.post(`/api/tracks/${trackId}/playbacks`);
    return res.data;
}

//4.가사

export const getTrackLyrics = async (trackId) => {
    const res = await api.get(`/api/tracks/${trackId}/lyrics`);
    return res.data;
}

