import React, {useState} from 'react';
import {Layout, Page, SettingToggle, TextStyle} from '@shopify/polaris';

/**
 * Render a home page for overview
 *
 * @return {React.ReactElement}
 * @constructor
 */
export default function Home() {
  const [enabled, setEnabled] = useState(false);
  // const {dispatch} = useStore();

  return (
    <Page fullWidth title="Home">
      <Layout>
        <Layout.Section>
          <SettingToggle
            action={{
              content: enabled ? 'Disable' : 'Enable',
              onAction() {
                setEnabled(prev => !prev);
              }
            }}
            enabled={enabled}
          >
            <TextStyle>
              App status is{' '}
              <TextStyle variation={enabled ? 'positive' : 'strong'}>
                {enabled ? 'enabled' : 'disabled'}
              </TextStyle>
            </TextStyle>
          </SettingToggle>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
