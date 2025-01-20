import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from '@emotion/react';

const MainLayout = ({ children }) => {
    const cachRTL = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin]
    })
    return (
       <CacheProvider value={cachRTL}>
         <div dir='rtl'>
            <main >{children}</main>
        </div>
       </CacheProvider>
    )
}

export default MainLayout
