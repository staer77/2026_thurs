import Timeline from "../components/Timeline";

function Home() {
    return <>
        <Timeline />
    </>;
}

export default Home

// export : 외부에서 접근 가능
// default : Home.tsx에 접근 시에 기본적으로 접근되는 컴포넌트
// export default function 밀고 바로 때어놓는 이유 : 가독성을 위해서