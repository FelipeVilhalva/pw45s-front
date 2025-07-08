import { CarrosselScreen } from '@/components/CarrosselScreen';
import './index.css';
import { ScoreScreen } from "@/components/ScoreScreen";

export function ScoreVessPage () {
    return (
       <div>
            <div className="container">
                <div className="mt-auto">
                    <CarrosselScreen />
                </div>
            </div>
        </div>
    )
}