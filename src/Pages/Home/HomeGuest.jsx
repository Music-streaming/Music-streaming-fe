import TrackCarousel from '../../components/home/common/TrackCarousel';

const topAlbums = [
  {
    imageSrc:
      'https://phinf.wevpstatic.net/MjAyNTEwMTVfMTg2/MDAxNzYwNTM5MTEzOTU2.I6-tNqGzL7sSWs3xvcpuZng0a_h7gkZtJ-_99lUIoNgg.ilfFXeaLrKU-rvFbkhmaXI_4TkJnsy6AW4okOaidcGkg.JPEG/03983986-9f78-49f7-a2b8-a4581bed70f4.jpeg?type=w670',
    title: 'spagetti',
    artist: '르세라핌',
    albumId: '4SpbR6yFEvexJuaBpgAU5p',
    musicId: 101,
    artistId: 1001,
  },
  {
    imageSrc:
      'https://pimg.mk.co.kr/news/cms/202511/04/news-p.v1.20251104.df026a41f1b44b1aa3b4408eb8705e17_P1.jpg',
    title: 'ONE MORE TIME',
    artist: 'ALLDAY PROJECT',
    albumId: '4gEMn0YPOdotLOygnk0Ng2',
    musicId: 102,
    artistId: 2001,
  },
  {
    imageSrc:
      'https://tse4.mm.bing.net/th/id/OIP.3EVK0MhhcL-ygqTLRGReeQHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    title: 'Good GoodBye',
    artist: '화사',
    albumId: '7bmYpVgQub656uNTu6qGNQ',
    musicId: 103,
    artistId: 3001,
  },
  {
    imageSrc:
      'https://www.akbobada.com/home/akbobada/archive/akbo/img/202512031629011.jpg',
    title: 'NOT CUTE ANYMORE',
    artist: '아일릿',
    albumId: '36cgvBn0aadzOijnjjwqMN',
    musicId: 203,
    artistId: 2004,
  },
];

const guestRecommendedTracks = [
  {
    imageSrc:
      'https://tse3.mm.bing.net/th/id/OIP.QCVJriL2VB9vurObJN-EOgHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    title: '0+0',
    artist: '한로로',
    albumId: '5wVJpXzuKV6Xj7Yhsf2uYx',
    musicId: 104,
    artistId: 2001,
  },
  {
    imageSrc:
      'https://pimg.mk.co.kr/news/cms/202511/04/news-p.v1.20251104.df026a41f1b44b1aa3b4408eb8705e17_P1.jpg',
    title: 'ONE MORE TIME',
    artist: 'ALLDAY PROJECT',
    albumId: '4gEMn0YPOdotLOygnk0Ng2',
    musicId: 102,
    artistId: 2001,
  },
  {
    imageSrc:
      'https://images.genius.com/49dccf057e37ea28adf98373f0f376e6.1000x1000x1.png',
    title: 'FAMOUS',
    artist: 'ALLDAY PROJECT',
    albumId: '4gEMn0YPOdotLOygnk0Ng2',
    musicId: 202,
    artistId: 2003,
  },
  {
    imageSrc:
      'https://i.namu.wiki/i/XV_vMrqtsdvkB5PSraNODxtPA4igk1jFCh09qLCjmMFYotOanmfVgrZKrxCW9Pn7GYA-Ez6nYL3DBxpD2qkddg.webp',
    title: 'Hollywood Action',
    artist: 'BOYNEXTDOOR',
    albumId: '4hnHLgMSOiqERWBL4jINP1',
    musicId: 203,
    artistId: 2004,
  },
];

export default function HomeGuest() {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <TrackCarousel title="최신곡" tracks={topAlbums} />
      <TrackCarousel title="인기곡" tracks={guestRecommendedTracks} />
    </div>
  );
}
