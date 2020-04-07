import React from 'react';
import {ThemeProvider} from 'styled-components'
import { Wrapper } from './appStyle';
import { styleTheme } from './utils'
import { Main, Sidebar } from './containers';

export default () => (
	<ThemeProvider theme={styleTheme}>
		<Wrapper>
			<Sidebar />
			<Main />
		</Wrapper>
	</ThemeProvider>
)