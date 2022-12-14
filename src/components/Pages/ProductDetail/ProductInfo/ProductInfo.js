import classnames from 'classnames/bind'
import styles from './ProductInfo.module.scss'

import { Table, TableHeader, TableRow, TableCell, TableBody } from 'grommet'

import Color from '../Color-Product/Color'

const cx = classnames.bind(styles)

function ProductInfo ({ price, title })
{

    let dataPrice = []
    let dataTitle
    if(price)
    {   
        dataPrice = price
    }

    if(title)
    {   
        dataTitle = title
    }

    return (
        <div className={cx('container')}>
            <div className={cx("product-title",'')}>{dataTitle}</div>

            <div className={cx("price")}>
                <div>
                    <p>500 - 999 pieces</p>
                    <h3>{dataPrice[0]}</h3>
                </div>
                <div>
                    <p>1000 - 4999 pieces</p>
                    <h3>{dataPrice[1]}</h3>
                </div>
                <div>
                    <p>{`>= 5000 pieces`}</p>
                    <h3>{dataPrice[2]}</h3>
                </div>
            </div>

            <div className={cx("product-info")}>
                <div className={cx("product-color")}>
                    <p>Color</p>
                    <div className={cx("color")}>
                        <Color />
                    </div>
                </div>

                <div className={cx("product-size")}>
                    <p>Size</p>
                    <div className={cx("size")}>XL</div>
                </div>

                <div className={cx("product-leadtime")}>
                    <div className={cx('leadtime-title')}>
                        <p>Lead time:</p>
                    </div>
                    <div className={cx('leadtime-table')}>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        <strong>Quantity(pieces)</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        1 - 500
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        501 - 1000
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        {`> 1000`}
                                    </TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        <strong>Lead time (days)</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        7
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        10
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        To be negotiated
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className={cx("product-customization")}> 
                    <p className={cx('customization-title')}>Customization:</p>
                    <div>
                        <p>Customized logo(Min. order 1000 pieces)</p>
                        <p>Customized packaging(Min. order 1000 pieces)</p>
                        <p>Graphic customization(Min. order 1000 pieces)</p>
                    </div>
                </div>

                <div className={cx("product-shipping")}>
                    <p>Shipping:</p>
                    <div>Express</div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo