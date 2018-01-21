import React from 'react'
import Page from 'components/Page/Page'
import './Help.scss'

export default () => (
    <Page id="Help">
        <div className="faq">
            <div className="item">
                <p>Q 点买人</p>
                <p>A 作为投资人的交易合作方，负责向投资人提供交易策略的自然人</p>
            </div>
            <div className="item">
                <p>Q 投资人</p>
                <p>A 作为点买人的交易合作方，负责按点买人交易策略并利用自有资金和账户进行交易的自然人或法人。</p>
            </div>
            <div className="item">
                <p>Q 点买</p>
                <p>
                    A
                    指点买人向投资人发出买入指令，平台为点买人撮合投资人。成功后，投资人接受点买人指令并买入点买股。但是如果点买人所点买股票风险过大，投资人有权拒绝指令。
                </p>
            </div>
            <div className="item">
                <p>Q 点卖</p>
                <p>A 点买人向投资人发出卖出指令，投资人接受点买人指令卖出点买股。</p>
            </div>
            <div className="item">
                <p>Q 点买点卖时间</p>
                <p>A 交易日点买点卖时间为：9:30-11:30 13:00-14:55。</p>
            </div>
            <div className="item">
                <p>Q 持仓时间</p>
                <p>
                    A
                    2～20个交易日，默认每天自动递延，递延费从账户余额扣除，若余额不足或者不符合递延条件，策略将由投资人卖出清算，T+20当日必须结算。
                </p>
            </div>
            <div className="item">
                <p>Q 触发止盈</p>
                <p>A 当合作交易品种的浮动盈亏达到特定数值时，由投资人即时卖出交易品种全部持有数量进行止盈。</p>
            </div>
            <div className="item">
                <p>Q 触发止损</p>
                <p>A 当合作交易品种的浮动盈亏达到特定数值时，由投资人即时卖出交易品种全部持有数量进行止损。</p>
            </div>
            <div className="item">
                <p>Q 交易综合费</p>
                <p>A 每万元点买金额45元，费用包含第一天交易费，管理费以及第二天的递延费。</p>
            </div>
            <div className="item">
                <p>Q 履约保证金</p>
                <p>
                    A
                    履约保证金为点买人委托平台冻结用于履行交易亏损赔付义务的保证金，结束时根据策略盈亏清算。保证金越低风险也越大，保证金越高抗风险也越高。
                </p>
            </div>
            <div className="item">
                <p>Q 递延费</p>
                <p>A 包含平台信息服务费和平台收取用于补偿投资人资金占用费，每万元点买金额18元</p>
            </div>
            <div className="item">
                <p>Q 盈亏结算</p>
                <p>A 根据点买人发出指令已卖出，按照实际价格结算；如果盈利按照点买人和投资人9</p>
            </div>
            <div className="item">
                <p>Q 怎么充值？</p>
                <p>A 您可以通过网银充值、支付宝转账、银行转账三种方式进行充值。</p>
            </div>
            <div className="item">
                <p>Q 提款到账速度快吗？</p>
                <p>
                    A
                    正常情况下，提款在1个工作日内处理。当提款数量多，一般处理时间需要1-2个工作日左右，节假日可能会出现延迟。
                </p>
            </div>
            <div className="item">
                <p>Q 点卖清算后资金何时返还账户余额？</p>
                <p>
                    A
                    一般清算完后马上会到账户余额里，但是难免出现异常数据时，为了保证成交数据的正确性，我们会人工核实一遍数据，会造成清算时间一定的延迟。
                </p>
            </div>
            <div className="item">
                <p>Q 充值到账速度快吗？</p>
                <p>A 网银充值，立马到账。支付宝汇款和银行汇款一般半小时内到账。</p>
            </div>
            <div className="item">
                <p>Q 若清算时出现明显差错怎么办？</p>
                <p>A 若由于系统、接口等问题造成清算出错，我们会在核实数据后对用户该笔交易做资金修正。</p>
            </div>
            <div className="item">
                <p>Q 点卖清算后资金何时返还账户余额？</p>
                <p>
                    A
                    一般清算完后马上会到账户余额里，但是难免出现异常数据时，为了保证成交数据的正确性，我们会人工核实一遍数据，会造成清算时间一定的延迟。
                </p>
            </div>
        </div>
    </Page>
)
