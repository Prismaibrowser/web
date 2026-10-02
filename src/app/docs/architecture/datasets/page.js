import Link from 'next/link';

export const metadata = { title: 'Datasets & Benchmarks', description: 'Explore PrismSpace datasets, benchmark categories, file formats, preparation, and ingestion workflows.', alternates: { canonical: '/docs/architecture/datasets' } };

export default function DatasetsPage() {
  return (
    <div className="docs-page">
      <div className="docs-breadcrumbs">
        <Link href="/docs">Documentation</Link>
        <span>/</span>
        <Link href="/docs/architecture/overview">Architecture</Link>
        <span>/</span>
        <span>Datasets & Benchmarks</span>
      </div>

      <h1>datasets & benchmarks</h1>
      <p className="lead">
        PrismSpace trains its ML subsystem across 15+ benchmarks and preference corpora from 
        leading research institutions and companies.
      </p>

      <h2>dataset categories</h2>

      <h3>function calling & tool use</h3>
      <table>
        <thead>
          <tr>
            <th>Dataset</th>
            <th>Source</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>BFCL</strong></td>
            <td><a href="https://huggingface.co/datasets/gorilla-llm/Berkeley-Function-Calling-Leaderboard" target="_blank">gorilla-llm/Berkeley-Function-Calling-Leaderboard</a></td>
            <td>Function-calling precision, AST parameter verification, tool-agent routing</td>
          </tr>
          <tr>
            <td><strong>APIBench</strong></td>
            <td><a href="https://huggingface.co/datasets/gorilla-llm/APIBench" target="_blank">gorilla-llm/APIBench</a></td>
            <td>API intent classification and argument extraction across REST & SDK tools</td>
          </tr>
        </tbody>
      </table>

      <h3>agent workflows & planning</h3>
      <table>
        <thead>
          <tr>
            <th>Dataset</th>
            <th>Source</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ScaleAI LHAW</strong></td>
            <td><a href="https://huggingface.co/datasets/ScaleAI/lhaw" target="_blank">ScaleAI/lhaw</a></td>
            <td>Long-Horizon Agentic Workflows; multi-step DAG planning & dependency tracking</td>
          </tr>
          <tr>
            <td><strong>EnvFactory-RL</strong></td>
            <td><a href="https://huggingface.co/datasets/LARK-Lab/EnvFactory-RL" target="_blank">LARK-Lab/EnvFactory-RL</a></td>
            <td>Reinforcement learning environment action trajectories & reward modeling</td>
          </tr>
          <tr>
            <td><strong>EnvFactory-SFT</strong></td>
            <td><a href="https://huggingface.co/datasets/LARK-Lab/EnvFactory-SFT-FILTERED" target="_blank">LARK-Lab/EnvFactory-SFT-FILTERED</a></td>
            <td>Tool-use supervised fine-tuning and agent instruction following</td>
          </tr>
          <tr>
            <td><strong>AgentInstruct</strong></td>
            <td><a href="https://huggingface.co/datasets/THUDM/AgentInstruct" target="_blank">THUDM/AgentInstruct</a></td>
            <td>Broad agent instruction taxonomies across diverse software tasks</td>
          </tr>
          <tr>
            <td><strong>Tau-Bench</strong></td>
            <td><a href="https://github.com/sierra-research/tau-bench" target="_blank">sierra-research/tau-bench</a></td>
            <td>Dynamic user-agent tool environment trajectories</td>
          </tr>
        </tbody>
      </table>

      <h3>mcp protocol & multi-agent</h3>
      <table>
        <thead>
          <tr>
            <th>Dataset</th>
            <th>Source</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>LiveMCPBench</strong></td>
            <td><a href="https://huggingface.co/datasets/ICIP/LiveMCPBench" target="_blank">ICIP/LiveMCPBench</a></td>
            <td>Standardized Model Context Protocol server & tool interaction benchmark</td>
          </tr>
          <tr>
            <td><strong>Open-M3-Bench</strong></td>
            <td><a href="https://huggingface.co/datasets/EtaYang10th/Open-M3-Bench" target="_blank">EtaYang10th/Open-M3-Bench</a></td>
            <td>Multi-agent collaboration templates and dynamic swarm orchestration</td>
          </tr>
        </tbody>
      </table>

      <h3>preference & alignment</h3>
      <table>
        <thead>
          <tr>
            <th>Dataset</th>
            <th>Source</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>HH-RLHF</strong></td>
            <td><a href="https://huggingface.co/datasets/Anthropic/hh-rlhf" target="_blank">Anthropic/hh-rlhf</a></td>
            <td>Human preference pairs (chosen/rejected) for safety and helpfulness alignment</td>
          </tr>
          <tr>
            <td><strong>OASST1</strong></td>
            <td><a href="https://huggingface.co/datasets/OpenAssistant/oasst1" target="_blank">OpenAssistant/oasst1</a></td>
            <td>Multi-turn conversational preference trees and quality ranking</td>
          </tr>
        </tbody>
      </table>

      <h3>routing & provider selection</h3>
      <table>
        <thead>
          <tr>
            <th>Dataset</th>
            <th>Source</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>LMSYS Chatbot Arena</strong></td>
            <td><a href="https://huggingface.co/datasets/lmsys/lmsys-chatbot-arena-conversations" target="_blank">lmsys/lmsys-chatbot-arena-conversations</a></td>
            <td>Real-world dialogues for provider routing (openai, anthropic, google) by task capability</td>
          </tr>
          <tr>
            <td><strong>RouterBench</strong></td>
            <td><a href="https://huggingface.co/datasets/withmartian/routerbench" target="_blank">withmartian/routerbench</a></td>
            <td>LLM routing benchmark for multi-provider performance and cost optimization</td>
          </tr>
          <tr>
            <td><strong>xRouteBench</strong></td>
            <td><a href="https://huggingface.co/datasets/ulab-ai/xRouteBench" target="_blank">ulab-ai/xRouteBench</a></td>
            <td>Multi-candidate execution benchmarks across diverse LLM tasks</td>
          </tr>
        </tbody>
      </table>

      <h3>retrieval & ranking</h3>
      <table>
        <thead>
          <tr>
            <th>Dataset</th>
            <th>Source</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>BEIR</strong></td>
            <td><a href="https://github.com/beir-cellar/beir" target="_blank">beir-cellar/beir</a></td>
            <td>Information retrieval benchmark for dense & sparse vector search evaluation</td>
          </tr>
        </tbody>
      </table>

      <h3>security & safety</h3>
      <table>
        <thead>
          <tr>
            <th>Dataset</th>
            <th>Source</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Bordair Multimodal</strong></td>
            <td><a href="https://huggingface.co/datasets/Bordair/bordair-multimodal" target="_blank">Bordair/bordair-multimodal</a></td>
            <td>Multimodal prompt security, jailbreak detection & safe tool authorization</td>
          </tr>
        </tbody>
      </table>

      <h2>directory structure</h2>
      <p>
        Training records are ingested from <code>model/datasets/training/</code>, held-out test data 
        from <code>model/datasets/testing/</code>, and validation benchmarks from <code>model/datasets/validation/</code>.
      </p>

      <pre><code>model/datasets/
├── training/
│   ├── APIBench/                   # JSON/JSONL API tool datasets
│   ├── AgentInstruct/              # Parquet/JSON agent instructions
│   ├── Berkeley-Function-Calling-Leaderboard/  # BFCL tool-calling records
│   ├── EnvFactory-RL/              # RL trajectory reward files
│   ├── EnvFactory-SFT-FILTERED/    # Tool-use SFT traces
│   ├── LiveMCPBench/               # MCP benchmark traces
│   ├── Open-m3-bench/              # Multi-agent workflow templates
│   ├── agent-llm-traces/           # Execution logs & run traces
│   ├── beir/                       # Retrieval corpora
│   ├── hh-rlhf/                    # Pairwise preference (.jsonl.gz)
│   ├── oasst1/                     # Conversational trees
│   ├── tau-bench-trajectories/     # Interactive environment logs
│   ├── lmsyschatbot_arena_conversations/  # *.parquet from LMSYS
│   ├── routerbench/                # *.pkl routing benchmarks
│   └── xRouteBench/                # llm_candidates/ & query Parquet
├── testing/                        # Test datasets (same structure)
├── validation/                     # Validation benchmarks
└── curated/                        # Preprocessed & normalized data</code></pre>

      <h2>file formats</h2>

      <h3>supported extensions</h3>
      <ul>
        <li><code>.json</code> - Standard JSON objects or arrays</li>
        <li><code>.jsonl</code> - Newline-delimited JSON (one record per line)</li>
        <li><code>.csv</code> - Comma-separated values</li>
        <li><code>.parquet</code> - Apache Parquet columnar format</li>
        <li><code>.txt</code> - Plain text (typically one example per line)</li>
        <li><code>.json.gz</code> - Gzip-compressed JSON</li>
        <li><code>.jsonl.gz</code> - Gzip-compressed JSONL</li>
      </ul>

      <h3>automatic canonicalization</h3>
      <p>
        The dataset loader (<code>model/dataset_loader.py</code>) automatically identifies and maps 
        heterogeneous columns into canonical internal training fields:
      </p>

      <table>
        <thead>
          <tr>
            <th>Internal Field</th>
            <th>Source Columns (auto-detected)</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>_text</code></td>
            <td><code>prompt</code>, <code>question</code>, <code>instruction</code>, <code>text</code>, <code>conversation</code></td>
            <td>Formatted query/prompt text</td>
          </tr>
          <tr>
            <td><code>_intent_label</code></td>
            <td><code>intent</code>, <code>category</code>, <code>task_type</code></td>
            <td>Extracted target intent domain</td>
          </tr>
          <tr>
            <td><code>_agent_label</code></td>
            <td><code>agent</code>, <code>worker</code>, <code>executor</code></td>
            <td>Recommended agent or tool name</td>
          </tr>
          <tr>
            <td><code>_approval_label</code></td>
            <td><code>requires_approval</code>, <code>risk_level</code>, <code>safe</code></td>
            <td>Binary flag for elevated permission</td>
          </tr>
          <tr>
            <td><code>_chosen</code></td>
            <td><code>chosen</code>, <code>preferred</code>, <code>positive</code></td>
            <td>Preferred output for ORPO</td>
          </tr>
          <tr>
            <td><code>_rejected</code></td>
            <td><code>rejected</code>, <code>negative</code>, <code>suboptimal</code></td>
            <td>Rejected output for ORPO</td>
          </tr>
        </tbody>
      </table>

      <h2>dataset preparation</h2>

      <h3>download datasets</h3>
      <p>Datasets are automatically downloaded when training, or manually via HuggingFace CLI:</p>
      <pre><code># Install HuggingFace CLI
pip install huggingface_hub

# Download specific dataset
huggingface-cli download ScaleAI/lhaw --repo-type dataset --local-dir model/datasets/training/lhaw

# Download BFCL
huggingface-cli download gorilla-llm/Berkeley-Function-Calling-Leaderboard --repo-type dataset --local-dir model/datasets/training/Berkeley-Function-Calling-Leaderboard</code></pre>

      <h3>normalize datasets</h3>
      <p>Process and normalize heterogeneous formats into canonical curated datasets:</p>
      <pre><code>python -m model.prepare_supervised_datasets \
  --input-dir model/datasets/training \
  --output-dir model/datasets/training/curated</code></pre>

      <div className="docs-callout warning">
        <div className="docs-callout-title">⚠️ Storage Requirements</div>
        <p>
          Complete dataset collection requires approximately <strong>50-100GB</strong> of disk space. 
          You can selectively download only the datasets needed for specific models.
        </p>
      </div>

      <h2>dataset ingestion pipeline</h2>

      <h3>loader architecture</h3>
      <pre><code># Simplified ingestion flow
for file in dataset_dir.glob("**/*"):
    if file.suffix in SUPPORTED_FORMATS:
        # Load based on format
        records = load_file(file)
        
        # Auto-detect schema
        schema = infer_schema(records)
        
        # Map to canonical fields
        normalized = canonicalize(records, schema)
        
        # Validate and deduplicate
        validated = validate_records(normalized)
        
        # Append to training corpus
        corpus.extend(validated)</code></pre>

      <h3>quality control</h3>
      <ul>
        <li><strong>Deduplication</strong> - Remove exact and near-duplicate examples</li>
        <li><strong>Validation</strong> - Check for required fields and data types</li>
        <li><strong>Filtering</strong> - Remove examples with missing or invalid data</li>
        <li><strong>Balancing</strong> - Ensure representative sampling across categories</li>
        <li><strong>Statistics</strong> - Generate dataset statistics and distributions</li>
      </ul>

      <h2>usage in training</h2>
      <p>
        The prepared datasets are consumed by model training scripts:
      </p>

      <pre><code># Train with specific dataset limit
python -m model.train \
  --dataset-dir model/datasets/training \
  --curated-dir model/datasets/training/curated \
  --output-dir model/artifacts \
  --max-rows-per-file 50000

# Train with all available data
python -m model.train \
  --dataset-dir model/datasets/training \
  --output-dir model/artifacts</code></pre>

      <h2>adding custom datasets</h2>
      <p>To add your own datasets to the training pipeline:</p>

      <ol>
        <li>Place files in <code>model/datasets/training/your-dataset/</code></li>
        <li>Use supported formats (JSON, JSONL, CSV, Parquet)</li>
        <li>Include canonical field names or mappable variations</li>
        <li>Run normalization: <code>python -m model.prepare_supervised_datasets</code></li>
        <li>Train models with updated dataset directory</li>
      </ol>

      <h3>example custom dataset</h3>
      <pre><code>{`// model/datasets/training/custom-intents/examples.jsonl
{"prompt": "Show me all users", "intent": "SQL", "agent": "SQLSpecialist"}
{"prompt": "Create a new React component", "intent": "Code", "agent": "CodeExpert"}
{"prompt": "Test the login flow", "intent": "Navigation", "agent": "BrowserAgent"}`}</code></pre>

      <h2>next steps</h2>
      <div className="quick-links-grid">
        <Link href="/docs/architecture/directory" className="quick-link-card">
          <span className="quick-link-icon">📁</span>
          <span className="quick-link-title">Directory Structure</span>
          <span className="quick-link-desc">Detailed project organization</span>
        </Link>

        <Link href="/docs/api/training" className="quick-link-card">
          <span className="quick-link-icon">🧠</span>
          <span className="quick-link-title">Training Models</span>
          <span className="quick-link-desc">Train with these datasets</span>
        </Link>
      </div>

      <div className="docs-nav-footer">
        <Link href="/docs/architecture/ml-models" className="docs-nav-button prev">
          <span className="docs-nav-label">Previous</span>
          <span className="docs-nav-title">← ML Models & Alignment</span>
        </Link>
        <Link href="/docs/architecture/directory" className="docs-nav-button">
          <span className="docs-nav-label">Next</span>
          <span className="docs-nav-title">Directory Structure →</span>
        </Link>
      </div>
    </div>
  );
}
