export const delayedResult = async (data, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

export const photos = [
  {
    url: 'https://cdn.pixabay.com/photo/2017/09/10/14/14/cliffs-2735697_1280.jpg',
    key: 'image-1.jpg',
    size: 2020300
  },{
    url: 'https://cdn.pixabay.com/photo/2015/03/11/23/21/colorado-669410_1280.jpg',
    key: 'image-2.jpg',
    size: 2020300
  },{
    url: 'https://cdn.pixabay.com/photo/2018/01/17/17/48/kilauea-3088675_1280.jpg',
    key: 'image-3.jpg',
    size: 2020300
  },{
    url: 'https://cdn.pixabay.com/photo/2016/08/12/20/14/river-1589616_1280.jpg',
    key: 'image-4.jpg',
    size: 2020300
  },{
    url: 'https://cdn.pixabay.com/photo/2020/05/07/21/40/denali-5143349_1280.jpg',
    key: 'image-5.jpg',
    size: 2020300
  },{
    url: 'https://cdn.pixabay.com/photo/2019/06/09/02/38/west-virginia-4261419_1280.jpg',
    key: 'image-6.jpg',
    size: 2020300
  },{
    url: 'https://cdn.pixabay.com/photo/2018/08/25/23/30/mesa-verde-view-3631220_1280.jpg',
    key: 'image-7.jpg',
    size: 2020300
  },{
    url: 'https://cdn.pixabay.com/photo/2013/02/11/15/44/great-basin-national-park-80568_1280.jpg',
    key: 'image-8.jpg',
    size: 2020300
  }
];

export const photoDetail = {
  url: 'https://cdn.pixabay.com/photo/2017/09/10/14/14/cliffs-2735697_1280.jpg',
  key: 'image-1.jpg',
  metadata: {
    size: 1020304,
    exif: {
      ExifImageWidth: 1200,
      ExifImageHeight: 1200
    },
    image: {
      Make: 'Apple',
      Model: 'iPhone 13 Max Plus',
      ModifyDate: '2020:06:13 13:01:22'
    },
    labels: [
      'test',
      'sample',
      'tree',
      'stuff'
    ]
  }
}