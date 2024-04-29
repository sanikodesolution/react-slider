import ReactSlider from 'react-slider';


const ReactSlider = () => {

  return (
    <>

		<ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      defaultValue={[0, 35, 100]}
      ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
      ariaValuetext={state => `Thumb value ${state.valueNow}`}
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      pearling
      minDistance={1}
    />

    </>
  );
};
export default ReactSlider