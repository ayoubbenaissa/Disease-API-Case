export const Error = ({errorText}: {errorText: string}) => {
    return (
        <>
        <div className="error">{errorText}</div>
        </>
    )
}