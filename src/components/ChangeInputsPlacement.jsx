export default function ChangeInputsPlacements({inputsPlacements, setInputsPlacement}) {
    const moveInputs = () => {
        setInputsPlacement(inputsPlacements === 'top' ? 'down' : 'top')
    }

    return (
        <>
            <p onClick={moveInputs} className="order-10 w-fit m-auto cursor-pointer text-blue-600 underline">Wanna move input { inputsPlacements === 'top' ? 'down' : 'up' }?</p>
        </>
    )
}