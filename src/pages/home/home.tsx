import { Row, Col, Card, Image, Space, Timeline } from "antd";
import { TbBrandVercel } from "react-icons/tb";
import { ClockCircleOutlined } from '@ant-design/icons';

const Home = (props: any) => {
    return (<Card title="Sayfa akışı ? be tablo ? flowchart ? süreç ? ilişkiler ?">
        <Timeline
            mode="left"
            items={[
                {
                    label: '2015-09-01',
                    children: 'Create a services',
                },
                {
                    label: '2015-09-01 09:12:11',
                    children: 'Solve initial network problems',
                },
                {
                    children: 'Technical testing',
                },
                {
                    label: '2015-09-01 09:12:11',
                    children: 'Network problems being solved',
                },
                {
                    label: '2015-09-01 09:12:11',
                    children: 'Network problems being solved',
                    color: 'red',
                    dot: <ClockCircleOutlined className="timeline-clock-icon" />

                },
                {
                    label: '2015-09-01 09:12:11',
                    children: 'Network problems being solved',
                },
                {
                    label: '2015-09-01 09:12:11',
                    children: 'Network problems being solved',
                },
                {
                    label: '2015-09-01 09:12:11',
                    children: 'Network problems being solved',
                },
            ]}
        />

    </Card>
    );
};

export default Home;