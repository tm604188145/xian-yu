import React, { useState, useEffect } from 'react';

export default function Commodity() {
  const [switchTime, setSwitchTime] = useState('');
  const mockData = [
    {
      time: '2022-3-30 01:59:00',
      commodityTitle: '移动端固态硬盘（PSSD）T8灰色',
      suvPrice: 888,
      suvDetails: '365天质保｜读写速度500M/S 轻巧方便',
    },
    {
      time: '2022-5-31 13:59:00',
      commodityTitle: '移动端固态硬盘（PSSD）T8灰色',
      suvPrice: 888,
      suvDetails: '365天质保｜读写速度500M/S 轻巧方便',
    },
  ];
  function getTime(times) {
    const timeing = new Date();
    const time = new Date(times);
    let timeValue = time.getTime() - timeing.getTime();
    // debug
    // console.log('2');
    const day = parseInt(timeValue / (24 * 60 * 60 * 1000));
    timeValue %= (24 * 60 * 60 * 1000);
    const hour = parseInt(timeValue / (60 * 60 * 1000));
    timeValue %= (60 * 60 * 1000);
    const minute = parseInt(timeValue / (60 * 1000));
    timeValue %= (60 * 1000);
    const seconde = parseInt(timeValue / 1000);
    if (day >= 1 || hour >= 24) {
      return `>24小时 ${day}天${hour}时`;
    } else {
      // text需要把mock时间改为24小时之内
      return `<24小时 ${hour}时${minute}分${seconde}秒`;
    }
  }
  useEffect(() => {
    const starUpTimer = setTimeout(() => {
      setSwitchTime(new Date());
    }, 1000);
    return () => {
      clearTimeout(starUpTimer);
    };
  }, [switchTime]);
  // 点击跳转页面
  const priceClick = () => {
    window.location.href = 'https://www.goofish.com';
  };
  return (
    <div>
      {
          mockData?.map((item, index) => {
            return (
              <div style={{ background: '#000' }} key={index}>
                <div style={{ paddingLeft: '10px', color: '#fff' }}>商品时间<span>-</span>当前时间{getTime(item.time)}</div>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', height: '100px', background: '#fff' }}>
                  <div style={{ width: '30%' }}>
                    <div style={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img
                        style={{ width: '60px', height: '60px' }}
                        src="https://img.alicdn.com/imgextra/i2/O1CN01v2w1ie1j20dHy7GKS_!!6000000004489-2-tps-93-93.png"
                      />
                    </div>
                  </div>
                  <div style={{ width: '70%' }}>
                    <div>
                      <div style={{ fontWeight: 'bold' }}>{item.commodityTitle}</div>
                      <div style={{ fontSize: '12px', color: '#ccc' }}>{item.suvDetails}</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                        <div style={{ width: '100px', marginTop: '10px', color: '#f00' }}>
                          当前价格<span>{item.suvPrice}</span>
                        </div>
                        <div
                          onClick={priceClick}
                          style={{ width: '90px',
                            height: '40px',
                            background: '#FBD8AE',
                            textAlign: 'center',
                            lineHeight: '40px',
                            borderRadius: '20px' }}
                        >
                          去出价
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
      }
    </div>
  );
}