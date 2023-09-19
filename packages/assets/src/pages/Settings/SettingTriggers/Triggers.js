import React, {useState} from 'react';
import {Page, Select, Stack, TextField} from '@shopify/polaris';
import '@assets/styles/components/Settings/SettingTriggers/settingTriggers.scss';

const Triggers = () => {
  const [selected, setSelected] = useState('all-pages');

  const options = [
    {label: 'All pages', value: 'all-pages'},
    {label: 'Specific pages', value: 'specific-pages'}
  ];

  const handleSelectChange = value => setSelected(value);

  return (
    <div className="Setting-Triggers__Wrapper">
      <Page fullWidth title="PAGES RESTRICTION">
        <Stack vertical spacing="extraLoose">
          <Select options={options} onChange={handleSelectChange} value={selected} />
          {selected === 'specific-pages' && (
            <TextField
              label="Included pages"
              multiline={3}
              helpText="Page URLs to show the pop-up (separated by new lines)"
            />
          )}
          <TextField
            label="Excluded pages"
            multiline={3}
            helpText="Page URLs NOT to show the pop-up (separated by new lines)"
          />
        </Stack>
      </Page>
      ;
    </div>
  );
};

export default Triggers;
