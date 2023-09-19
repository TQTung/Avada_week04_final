import React, {useState} from 'react';
import {Card, Layout, Page, Tabs} from '@shopify/polaris';
import NotificationPopup from '@assets/components/NotificationPopup/NotificationPopup';
import {isEmbeddedApp} from '@assets/config/app';
import SettingDisplay from '@assets/pages/Settings/SettingDisplay/SettingDisplay';
import Triggers from './SettingTriggers/Triggers';

/**
 * @return {JSX.Element}
 */
export default function Settings() {
  const [selected, setSelected] = useState(0);

  const tabs = [
    {
      id: 'all-customers-1',
      content: 'Display'
    },
    {
      id: 'accepts-marketing-1',
      content: 'Triggers'
    }
  ];

  const item = {
    id: '106',
    url: '/',
    firstName: 'John Doe',
    country: 'United States',
    city: 'New York',
    productName: 'Puffer Jacket With Hidden Hood',
    productImage:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  };

  const handleOnClosePopup = id => {
    console.log('item vs id: ' + id);
  };

  return (
    <Page
      title="Settings"
      fullWidth
      subtitle="Decide how your notifications will display"
      primaryAction={{
        content: 'Save'
      }}
    >
      <Layout>
        <Layout.Section oneThird>
          <NotificationPopup
            id={item.id}
            firstName={item.firstName}
            city={item.city}
            country={item.country}
            productName={item.productName}
            productImage={item.productImage}
            onClosePopup={handleOnClosePopup}
          />
        </Layout.Section>
        <Layout.Section oneHalf={isEmbeddedApp ? true : false}>
          <Card>
            <Tabs
              tabs={tabs}
              selected={selected}
              onSelect={selectedTabIndex => setSelected(selectedTabIndex)}
            >
              <Card.Section> {selected === 0 ? <SettingDisplay /> : <Triggers />} </Card.Section>
            </Tabs>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

Settings.propTypes = {};
