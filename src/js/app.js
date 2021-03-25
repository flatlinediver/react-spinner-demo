import React from 'react';
import {ThemeProvider} from 'styled-components'
import { Wrapper } from './appStyle';
import { styleTheme } from './utils'
import { Main, Sidebar } from './containers';
import { useStore } from './store';
import {SpinnerProvider} from '@flatlinediver/react-spinner'

export default () => {
    const {store} = useStore();
	return (
		<ThemeProvider theme={styleTheme}>
			<SpinnerProvider value={store}>
				<Wrapper>
					<Sidebar />
					<Main />
				</Wrapper>
			</SpinnerProvider>
		</ThemeProvider>
	)
}