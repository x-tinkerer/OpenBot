import {Panel} from 'rsuite';
import {GridView} from 'src/components/GridView';
import {Dataset, useDatasets} from 'src/utils/useDatasets';
import {Link} from 'react-router-dom';

export function HomePage() {
    const datasets = useDatasets();
    return (
        <>
            <h3>Train datasets</h3>
            <GridView>
                {datasets.value.train.map(ds => (
                    <DatasetInfo key={ds.name} {...ds}/>
                ))}
            </GridView>
            <h3>Test datasets</h3>
            <GridView>
                {datasets.value.test.map(ds => (
                    <DatasetInfo key={ds.name} {...ds}/>
                ))}
            </GridView>
        </>
    );
}

function DatasetInfo(props: Dataset) {
    return (
        <Panel header={<Link to={props.path}>{props.name}</Link>} shaded>
            <div>Sessions: {props.sessions.length}</div>
            <div>Frames: {props.sessions.reduce((sum, cur) => sum + cur.frames, 0)}</div>
        </Panel>
    );
}
