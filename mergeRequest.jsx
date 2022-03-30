import React from 'react';

export default function Merge(){
    let timer="";
    let arr=[];
    let number= 0;
    const getUserInfoById = (id) => {
        return new Promise((resolve) => {
          if (timer) {
            clearTimeout(timer);
          }
          arr.push(id);
          timer = setTimeout(() => {
            let params = { id };
            if (arr.length >= 2) {
              params = { ids: arr };
            }
            getUserInfo(params).then((res) => {
              arr = [];
              timer = '';
              resolve({ info: res, id });
            });
          }, 1000);
        });
      };
    return(
        <div>
            <div onClick={()=>{
                number=number+1;
                getUserInfoById(number)
            }}>111</div>
        </div>
    )
}