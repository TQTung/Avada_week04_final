import React from 'react';
import {Button, DisplayText, Icon, Link, Stack, TopBar} from '@shopify/polaris';
import PropTypes from 'prop-types';
import {LOGO_WIDTH} from '@assets/config/theme';
import '@assets/styles/layout/topbar.scss';
import {LOGO_AVADA} from '@assets/config/integration/appList';
import {Avatar, TextStyle} from '@shopify/polaris';
import {MobileCancelMajor, MobileHamburgerMajor} from '@shopify/polaris-icons';

/**
 * @param {boolean} isNavOpen
 * @param {function} toggleOpenNav
 * @return {JSX.Element}
 * @constructor
 */
export default function AppTopBar({isNavOpen, toggleOpenNav}) {
  return (
    <TopBar
      secondaryMenu={
        <div className="Avada-TopBar__Wrapper">
          <div className="Avada-TopBar__Title">
            <Button plain onClick={toggleOpenNav}>
              <Icon source={isNavOpen ? MobileCancelMajor : MobileHamburgerMajor} />
            </Button>
            <img alt="Avada App Name" src={LOGO_AVADA} width={LOGO_WIDTH} />
            <DisplayText size="small">
              <Link url="/" removeUnderline>
                avada
              </Link>
            </DisplayText>
          </div>
          <div className="Avada-TopBar__Icons">
            <Stack alignment="center" spacing="tight">
              <Avatar initials="A" size="small" />
              <TextStyle>Avada</TextStyle>
            </Stack>
          </div>
        </div>
      }
    />
  );
}

AppTopBar.propTypes = {
  isNavOpen: PropTypes.bool,
  toggleOpenNav: PropTypes.func
};
