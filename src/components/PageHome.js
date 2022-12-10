import React, {useState, useEffect} from 'react';

const PageHome = () => {
    // 每次組件渲染都會執行
    console.log('Home');

    const [FLG1, setFLG1] = useState(true); // state 如果發生變化整個組件都會重新渲染，可以從console.log('Home')看出來
    const [FLG2, setFLG2] = useState(true);
    // 控制 副作用不需要每次都執行, 後面加空 [] => 只有在組件加載才會執行裡面的內容，空的代表不監視值
    useEffect(() => {
        console.log('Home.useEffect');
    }, [FLG1]);
    return (
        <div>
            <h1>PageHome</h1>
            <div className="text-info">FLG1: {FLG1.toString()}</div>
            <div className="text-success">FLG2: {FLG2.toString()}</div>
            <hr className="mb-3" />
            <button
                className="btn btn-sm btn-info mx-1"
                onClick={() => {
                    setFLG1(!FLG1);
                }}
            >
                Sure1
            </button>
            <button
                className="btn btn-sm btn-success mx-1"
                onClick={() => {
                    setFLG2(!FLG2);
                }}
            >
                Sure2
            </button>
        </div>
    );
};
export default PageHome;
