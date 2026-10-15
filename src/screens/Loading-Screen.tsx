// 로딩 시 보여지는 화면

function LoadingScreen() {
  return (
    <div
      style={{
        flexDirection: "column",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "red",
      }}
    >
      Loading...
    </div>
  );
}

export default LoadingScreen;
