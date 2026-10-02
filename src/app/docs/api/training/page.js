import Link from 'next/link';

export default function TrainingPage() {
  return (
    <div className="docs-page">
      <div className="docs-breadcrumbs">
        <Link href="/docs">Documentation</Link>
        <span>/</span>
        <Link href="/docs/api/training">API & Development</Link>
        <span>/</span>
        <span>Training Models</span>
      </div>

      <h1>training ml models</h1>
      <p className="lead">
        Complete guide to training PrismSpace ML models including environment setup, 
        dataset preparation, training procedures, and troubleshooting.
      </p>

      <h2>prerequisites</h2>
      <ul>
        <li>Python 3.11+ installed</li>
        <li>Virtual environment activated</li>
        <li>PyTorch with CUDA 12.6+ (optional, for GPU)</li>
        <li>ML requirements installed: <code>pip install -r model/requirements.txt</code></li>
        <li>Datasets downloaded to <code>model/datasets/training/</code></li>
      </ul>

      <div className="docs-callout">
        <div className="docs-callout-title">💡 See Also</div>
        <p>
          For complete setup instructions, see <Link href="/docs/getting-started/installation">Installation Guide</Link>.
        </p>
      </div>

      <h2>quick smoke test</h2>
      <p>Fast end-to-end dry run (1,000 samples per source) to verify pipeline:</p>
      <pre><code>python -m model.train \
  --dataset-dir model/datasets/training \
  --output-dir model/artifacts_test \
  --max-rows-per-file 1000</code></pre>

      <p><strong>What this does:</strong></p>
      <ul>
        <li>Loads first 1,000 records from each dataset</li>
        <li>Trains all routing and decision models</li>
        <li>Outputs test artifacts to <code>model/artifacts_test/</code></li>
        <li>Takes ~5-15 minutes depending on hardware</li>
        <li>Verifies dataset ingestion and feature engineering work</li>
      </ul>

      <h2>full production training</h2>
      <p>Complete training run on all available data:</p>
      <pre><code>python -m model.train \
  --dataset-dir model/datasets/training \
  --curated-dir model/datasets/training/curated \
  --output-dir model/artifacts \
  --max-rows-per-file 50000</code></pre>

      <p><strong>Training process:</strong></p>
      <ol>
        <li>Scans <code>model/datasets/training/</code> for all supported files</li>
        <li>Loads and normalizes datasets (max 50k records per file)</li>
        <li>Extracts features for each model type</li>
        <li>Trains 8 models in sequence</li>
        <li>Saves serialized artifacts to <code>model/artifacts/</code></li>
        <li>Generates training reports and metrics</li>
      </ol>

      <h2>models trained</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Output File</th>
            <th>Training Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intent Classifier</td>
            <td><code>intent_classifier.joblib</code></td>
            <td>~5 min</td>
          </tr>
          <tr>
            <td>Agent Router</td>
            <td><code>agent_router.joblib</code></td>
            <td>~10 min</td>
          </tr>
          <tr>
            <td>Model Router</td>
            <td><code>model_router.joblib</code></td>
            <td>~8 min</td>
          </tr>
          <tr>
            <td>Workflow Success Predictor</td>
            <td><code>workflow_success_predictor.joblib</code></td>
            <td>~7 min</td>
          </tr>
          <tr>
            <td>Approval Predictor</td>
            <td><code>approval_predictor.joblib</code></td>
            <td>~5 min</td>
          </tr>
          <tr>
            <td>Latency Predictor</td>
            <td><code>latency_predictor.joblib</code></td>
            <td>~3 min</td>
          </tr>
          <tr>
            <td>Cost Predictor</td>
            <td><code>cost_predictor.joblib</code></td>
            <td>~3 min</td>
          </tr>
          <tr>
            <td>Anomaly Detector</td>
            <td><code>anomaly_detector.joblib</code></td>
            <td>~6 min</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Total training time:</strong> ~45-60 minutes on modern CPU, ~15-20 minutes with GPU acceleration</p>

      <h2>command-line options</h2>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--dataset-dir</code></td>
            <td>Path to training datasets</td>
            <td><code>model/datasets/training</code></td>
          </tr>
          <tr>
            <td><code>--curated-dir</code></td>
            <td>Path to normalized/curated data</td>
            <td><code>None</code></td>
          </tr>
          <tr>
            <td><code>--output-dir</code></td>
            <td>Where to save trained models</td>
            <td><code>model/artifacts</code></td>
          </tr>
          <tr>
            <td><code>--max-rows-per-file</code></td>
            <td>Limit records per dataset file</td>
            <td><code>None</code> (unlimited)</td>
          </tr>
        </tbody>
      </table>

      <h2>monitoring training</h2>
      <p>Training outputs progress to console:</p>
      <pre><code>Loading datasets from model/datasets/training...
Found 15 dataset directories
Processing APIBench: 1000/1000 records
Processing BFCL: 1000/1000 records
...
Training Intent Classifier...
  Features: 5000 samples, 1024 dimensions
  Train/Test split: 4000/1000
  Accuracy: 94.5%
  Saved: model/artifacts/intent_classifier.joblib
...
Training complete! All models saved to model/artifacts/</code></pre>

      <h2>training on gpu</h2>
      <p>To use GPU acceleration:</p>
      <ol>
        <li>Verify CUDA is available:
          <pre><code>python -c "import torch; print(torch.cuda.is_available())"</code></pre>
        </li>
        <li>Training automatically uses GPU if detected</li>
        <li>Monitor GPU usage: <code>nvidia-smi</code></li>
        <li>Expect 3-4x speedup vs CPU</li>
      </ol>

      <h2>troubleshooting</h2>

      <h3>out of memory errors</h3>
      <pre><code># Reduce dataset size
python -m model.train --max-rows-per-file 10000

# Or use CPU instead of GPU
CUDA_VISIBLE_DEVICES="" python -m model.train</code></pre>

      <h3>missing datasets</h3>
      <pre><code># Download specific dataset
huggingface-cli download ScaleAI/lhaw \
  --repo-type dataset \
  --local-dir model/datasets/training/lhaw</code></pre>

      <h3>import errors</h3>
      <pre><code># Reinstall ML requirements
pip install -r model/requirements.txt --force-reinstall</code></pre>

      <h2>next steps</h2>
      <div className="quick-links-grid">
        <Link href="/docs/api/testing" className="quick-link-card">
          <span className="quick-link-icon">🧪</span>
          <span className="quick-link-title">Model Testing</span>
          <span className="quick-link-desc">Test trained models with sample inputs</span>
        </Link>

        <Link href="/docs/api/evaluation" className="quick-link-card">
          <span className="quick-link-icon">📊</span>
          <span className="quick-link-title">Model Evaluation</span>
          <span className="quick-link-desc">Evaluate model performance and metrics</span>
        </Link>

        <Link href="/docs/architecture/datasets" className="quick-link-card">
          <span className="quick-link-icon">📊</span>
          <span className="quick-link-title">Datasets Guide</span>
          <span className="quick-link-desc">Learn about training data sources</span>
        </Link>
      </div>

      <div className="docs-nav-footer">
        <Link href="/docs/usage-guide/troubleshooting" className="docs-nav-button prev">
          <span className="docs-nav-label">Previous</span>
          <span className="docs-nav-title">← Troubleshooting</span>
        </Link>
        <Link href="/docs/api/testing" className="docs-nav-button">
          <span className="docs-nav-label">Next</span>
          <span className="docs-nav-title">Model Testing →</span>
        </Link>
      </div>
    </div>
  );
}
