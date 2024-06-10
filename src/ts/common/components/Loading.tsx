import "@scss/common/Loading.scss";

interface LoadingI {
    className?: string
}
const Loading = (props: LoadingI) => {
    const { className } = props
    return (
        <div className={className ? `loading-${className}` : 'loading'}>
            <h1>Loading...</h1>
        </div>
    )
}

export default Loading