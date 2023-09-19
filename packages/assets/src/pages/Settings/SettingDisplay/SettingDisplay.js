import React, {useState} from 'react';
import {Checkbox, Page, RangeSlider, Stack} from '@shopify/polaris';
import '@assets/styles/components/Settings/SettingsDisplay/settingDisplay.scss';
import DesktopPositionInput from '@assets/pages/Settings/SettingDisplay/DesktopPositionInput';

export default function SettingDisplay() {
  const [value, setValue] = useState('bottom-left');
  const [isTruncateContent, setIsTruncateContent] = useState(false);
  const [isHideTimeAgo, setIsHideTimeAgo] = useState(false);
  const [rangeValue1, setRangeValue1] = useState(10);
  const [rangeValue2, setRangeValue2] = useState(15);
  const [rangeValue3, setRangeValue3] = useState(10);
  const [rangeValue4, setRangeValue4] = useState(20);

  const handleOnChange = value => {
    setValue(value);
    console.log(value);
  };

  const handleRangeSliderChange1 = value => {
    setRangeValue1(value);
  };
  const handleRangeSliderChange2 = value => {
    setRangeValue2(value);
  };
  const handleRangeSliderChange3 = value => {
    setRangeValue3(value);
  };
  const handleRangeSliderChange4 = value => {
    setRangeValue4(value);
  };

  return (
    <div className="Setting-Display__Wrapper">
      <Page title="APPEARANCE">
        <DesktopPositionInput
          label="Desktop Position"
          value={value}
          onChange={handleOnChange}
          helpText="The display position of the pop on your website"
        />
        <div className="Setting-Display__CheckBox">
          <Stack vertical>
            <Checkbox
              checked={isHideTimeAgo}
              onChange={checked => setIsHideTimeAgo(checked)}
              label="Hide time ago"
            />
            <Checkbox
              label="Truncate content text"
              checked={isTruncateContent}
              onChange={checked => setIsTruncateContent(checked)}
              helpText="If your product name is long for one line, it will be truncated to '...'"
            />
          </Stack>
        </div>
      </Page>
      <Page title="TIMING">
        <Stack distribution="fillEvenly">
          <Stack vertical>
            <RangeSlider
              output
              min={0}
              max={60}
              label="Display duration"
              value={rangeValue1}
              onChange={handleRangeSliderChange1}
              suffix={
                <div className="Timing-RangeSlider__boxDisplayTime"> {rangeValue1} second(s)</div>
              }
              helpText="How long each pop will display on your page"
            />
            <RangeSlider
              output
              min={0}
              max={60}
              label="Gap time between to pops"
              value={rangeValue2}
              onChange={handleRangeSliderChange2}
              suffix={
                <div className="Timing-RangeSlider__boxDisplayTime"> {rangeValue2} second(s)</div>
              }
              helpText="The time interval between tow popup notifications"
            />
          </Stack>
          <Stack vertical>
            <RangeSlider
              output
              min={0}
              max={60}
              label="Time before the first pop"
              value={rangeValue3}
              onChange={handleRangeSliderChange3}
              suffix={
                <div className="Timing-RangeSlider__boxDisplayTime"> {rangeValue3} second(s)</div>
              }
              helpText="The delay time before the first notification"
            />
            <RangeSlider
              output
              min={0}
              max={80}
              label="Maximum of popups"
              value={rangeValue4}
              onChange={handleRangeSliderChange4}
              suffix={
                <div className="Timing-RangeSlider__boxDisplayTime"> {rangeValue4} pop(s)</div>
              }
              helpText="The maximum times allowed to show popup"
            />
          </Stack>
        </Stack>
      </Page>
    </div>
  );
}
